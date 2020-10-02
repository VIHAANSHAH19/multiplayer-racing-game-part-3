class Form{
    constructor(){
        this.input= createInput("Name")
        this.button=createButton('play')
    }
    display(){
       
        this.input.position(200,100)
        var title=createElement('h1','Car Racing Game')
        title.position(200,0)
       
        this.button.position(200,150)
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        title.hide()
        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.updateCount(playerCount)
        player.update()
        var greeting=createElement('h4','Hello')
        greeting.position(200,200)    
    })
    }
}