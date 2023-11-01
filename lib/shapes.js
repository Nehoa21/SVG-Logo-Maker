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
        return `<circle cx="150" cy="100" r="80" fill=${this.color}/>`
    }
}

// create Square shape with user input of color
class Square extends Shapes {
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill=${this.color}/>`
    }
}

// create Triangle shape with user input of color
class Triangle extends Shapes {
    render() {
        return `<polygon points="200,10 300,200 110,200" fill=${this.color}/>`
    }
}

module.exports = { Circle, Square, Triangle };