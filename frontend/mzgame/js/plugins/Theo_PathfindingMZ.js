/*:
@target MZ
@plugindesc v1.0.1 - Pathfinding, move route generator.
@author TheoAllen
@url https://github.com/theoallen/RMMZ/tree/master/Plugins
@help
♦ About:
Move route generator. Generate the shortest path to the target point.
Because you're too lazy to put move route command one by one.

♦ How to use:
Use it in the move route --> script call
> this.generatePath(x, y)

Replace (x, y) with your target destination

Extra script command
> this.gotoPlayer() - Move to the player position
> this.gotoEvent(id) - Move to the specific event position

♦ Terms of Use:
- https://github.com/theoallen/RMMZ/blob/master/README.md
*/
var Theo = Theo || {}

Theo.Pathfinding = function(){
    const $ = Theo.Pathfinding
    $._version = '1.0.1'

    // Array shuffle
    if(!Array.prototype.shuffle){
        Array.prototype.shuffle = function(){
            const len = this.length
            for(let i = len - 1; i > 0; i--){
                const rand = Math.floor(Math.random() * (i + 1));
                const temp = this[i]
                this[i] = this[rand]
                this[rand] = temp
            }
            return this
        }
    }

    Game_Map.prototype.isLoopingMap = function(){
        return this.isLoopHorizontal() || this.isLoopVertical()
    }

    $.Queue = class {
        constructor(x, y, firstNode){
            this._loop = $gameMap.isLoopingMap()
            this._targetX = x
            this._targetY = y
            this.clear()
            this._frontQ.push(firstNode)
        }

        range(node){
            return $gameMap.distance(node.x, node.y, this._targetX, this._targetY)
        }

        push(newNode, parentNode){
            if(!this._loop && this.range(newNode) < this.range(parentNode)){
                const queue = this
                this._frontQ.push(newNode)
                this._frontQ.sort((a,b) => { queue.range(a) - queue.range(b)})
            }else{
                this._backQ.push(newNode)
            }
        }

        shift(){
            const result = this._frontQ.shift()
            return !!result ? result : this._backQ.shift()
        }

        isEmpty(){
            return (this._frontQ.length + this._backQ.length) === 0
        }

        clear(){
            this._frontQ = []
            this._backQ = []
        }
    }

    $.Node = class {
        constructor(x,y){
            this.x = x
            this.y = y
            this._visited = false
            this._expanded = false
            this._nodes = new $.Nodes()
            this._parent = null
        }

        expandNode(mapNodes, char){
            const directions = [2,4,6,8]
            for(const dir of directions){
                if(!char.isPathfindingPassable(this.x, this.y, dir)){
                    continue
                }
                const xpos = $gameMap.roundXWithDirection(this.x, dir);
                const ypos = $gameMap.roundYWithDirection(this.y, dir);
                const key = ""+xpos+"-"+ypos;
                let nextNode = mapNodes[key]
                if(nextNode === undefined){
                    nextNode = new $.Node(xpos, ypos)
                    mapNodes[key] = nextNode
                }else if(nextNode._visited){
                    continue
                }
                nextNode._parent = this
                this._nodes.insert(dir, nextNode)
            }
            this._expanded = true
        }

        getParentDir(){
            return this._parent._nodes.lookup(this);
        }
    }

    $.Nodes = class {
        insert(dir, node){
            this["dir"+dir] = node
        }
        
        lookup(node){
            let result
            for(const dir of [2,4,6,8]){
                if(this["dir"+dir] === node){
                    result = dir
                }
            }
            return result
        }
    }

    Game_Character.prototype.generatePath = function(tx, ty){
        if(this.x === tx && this.y === ty){
            return;
        }
        if(![2,4,6,8].some(d => this.canPass(tx, ty, d))){
            return
        }

        this._targetPoint = {
            x: tx,
            y: ty
        }

        let moveCode = [];
        const mapNodes = {}
        const firstNode = new $.Node(this.x, this.y)
        firstNode.expandNode(mapNodes, this)
        firstNode.visited = true
        mapNodes["" +  this.x + "-" + this.y] = firstNode
        const queue = new $.Queue(tx, ty, firstNode)

        while(!queue.isEmpty()){
            const node = queue.shift()
            for(const dir of [2,4,6,8].shuffle()){
                const nextNode = node._nodes["dir"+dir]
                if(!nextNode || nextNode._visited){
                    continue
                }
                if(nextNode.x === tx && nextNode.y === ty){
                    firstNode._parent = null
                    queue.clear()
                    moveCode = $.generateRoute(nextNode)
                    break
                }
                if(!nextNode._expanded){
                    nextNode.expandNode(mapNodes, this)
                }
                nextNode._visited = true
                queue.push(nextNode, node)
            }
            if(moveCode.length > 0){
                break
            }
        }

        if(moveCode.length === 0){
            return
        }

        const mvList = JsonEx.makeDeepCopy(this._moveRoute.list)
        let insertIndex = this._moveRouteIndex

        for(const list of moveCode){
            mvList.splice(insertIndex, 0, list)
            insertIndex++
        }
        this._moveRoute = JsonEx.makeDeepCopy(this._moveRoute)
        this._moveRoute.list = mvList
        this._moveRouteIndex -= 1;
        this._targetPoint = undefined
    }

    $.generateRoute = function(node){
        const list = []
        while(node._parent){
            const cmd = {code: node.getParentDir()/2}
            list.unshift(cmd);
            node = node._parent;
        }
        return list;
    }

    Game_Character.prototype.gotoChar = function(char){
        if(char){
            this.generatePath(char.x, char.y)
        }
    }

    Game_Character.prototype.gotoPlayer = function(){
        this.gotoChar($gamePlayer)
    }

    Game_Character.prototype.gotoEvent = function(id){
        const event = $gameMap.event(id)
        this.gotoChar(event)
    }

    Game_Character.prototype.isPathfindingPassable = function(x, y, dir){
        if(!this._targetPoint){
            return false
        }
        const x2 = $gameMap.roundXWithDirection(x, y, dir)
        const y2 = $gameMap.roundYWithDirection(x, y, dir)
        if(this._targetPoint.x === x2 && this._targetPoint.y === y2){
            if(this.isThrough()){
                return true
            }
            return this.isMapPassable(x, y, dir) && this.isMapPassable(x2, y2, this.reverseDir(dir))
        }
        return this.canPass(x,y,dir)
    }
}
Theo.Pathfinding()
