
AFRAME.registerComponent('marker-data', {
    tick: function () {     //The .tick() handler will get the positions updated every frame
        this.fetching()
    },
    fetching: function () {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
})

