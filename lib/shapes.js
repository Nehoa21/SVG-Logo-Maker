class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// create circle shape with user input of color
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

// create Square shape with user input of color
class Square extends Shapes {
    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.color}"/>`
    }
}

// create Triangle shape with user input of color
class Triangle extends Shapes {
    render() {
        return `<polygon points="150,10 250,175 60,175" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Square, Triangle };