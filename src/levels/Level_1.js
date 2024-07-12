
import Events from "../scripts/Events";

const Level_1 = {

    tile_size: 32,

    /*
        Key variables:

        id       [required] - an integer that corresponds with a tile in the data array.
        colour   [required] - any javascript compatible colour variable.
        solid    [optional] - whether the tile is solid or not, defaults to false.
        bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
        jump     [optional] - whether the player can jump while over the tile, defaults to false.
        friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
        gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
        fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
        script   [optional] - refers to a script in the scripts section, executed if it is touched.
    */

    keys: [
        {id: 0, colour: '#333', solid: 0},
        {id: 1, colour: '#888', solid: 0},
        {id: 2,colour: '#555',solid: 1,bounce: 0.35 },
        {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
        {id: 4,colour: '#777',jump: 1},
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
        {id: 6,colour: '#666',solid: 1,bounce: 0},
        {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'},
        {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'},
        {id: 9,colour: '#C93232',solid: 0,script: 'death'},
        {id: 10,colour: '#555',solid: 1},
        {id: 11,colour: '#0FF',solid: 0,script: 'unlock'}
    ],

    data: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2],
        [2, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2],
        [2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 2],
        [2, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 2],
        [2, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 6, 1, 1, 1, 1, 7, 1, 1, 1, 1, 6, 1, 2],
        [2, 1, 6, 6, 6, 1, 1, 1, 1, 1, 6, 6, 6, 1, 2],
        [2, 1, 1, 1, 6, 6, 1, 1, 1, 6, 6, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 6, 6, 1, 6, 6, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 6, 6, 1, 6, 6, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 6, 6, 1, 1, 1, 6, 6, 1, 1, 1, 2],
        [2, 1, 1, 1, 6, 1, 1, 1, 1, 1, 6, 1, 1, 1, 2],
        [2, 1, 1, 6, 6, 1, 1, 8, 1, 1, 6, 6, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],

    canvas: {
        width: 480,
        height: 865
    },

    // Default gravity of the map
    gravity: {
        x: 0,
        y: 0.3
    },

    // Velocity limits
    vel_limit: {
        x: 2,
        y: 16
    },

    // Movement speed when the key is pressed
    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },

    // The coordinates at which the player spawns and the colour of the player
    player: {
        x: 2,
        y: 7,
        colour: '#FF9900'
    },

    // scripts referred to by the "script" variable in the tile keys
    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_colour: 'this.player.colour = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        next_level: 'alert("Yay! You won! Reloading map.");this.load_map(data);',
        death: 'alert("You died!");Engine.load_map(map);',
        unlock: 'this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = "#888";'
    }
};

export default Level_1;