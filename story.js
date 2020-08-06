class Story{
    constructor(){
        this.paragraph=createElement('p');
        this.titleImage=createImg('images/images.jpg')
        this.start=createButton("Start")
       this.image=loadImage("images/seq.png")
    }
    display(){

        this.paragraph.html("There is a group called as sad seven </br> because they never get chance to win </br>against other people so now its  </br> up to will you make the sad seven as the lucky seven ");
        this.paragraph.position( 200,200 )
        this.titleImage.position(displayWidth-150,displayHeight)
        this.start.position(100,200)
        image(this.image,200,100)
    }
}