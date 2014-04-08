
/* Need a standard interface for declcam to run these operations.
 * Each operation is defined in a configuration node with the same name
 * as the op itself, i.e. this is the 'turn' operation, and is defined
 * declarativly in a json node named 'turn'
 *
 * Operations have as basic structure:
 * Information to create a machine object
 * Information to create a stock object
 * Information to create a tool object
 * The operation name
 * Operation specific configuration
 *
 * Some of these can be retrieved from the active declcam object
 * (current stock object, material, machine definition (not an active object))
 * There are operation-global properties that are read by declcam, and specifics
 * are placed in a node with the name of the operation.
 *
 * declcam will call a function with the name of the operation, passing as params
 * the part and the generic operation object (basic functions & contains the default data).
 *
 * Using the part object the op can retrieve the current stock object (the same object for
 * all ops in a part), material defs, etc.
 *
 * Using the operation object the op can retrieve the basic operation information,
 * name, create a machine instance (based on an inline machine def. or any def up to
 * project level), get the transformed stock object (machine other face, etc.)
 */

var example_op = {
    "name": "Rough Turn",
    /* If not specified here machine defaults to the part
        * level machine object, else the project level machine
        * object. */
    "machine": "/machines/sherline-lathe.json",
    "stock": {
        "rotate": {"x":0, "y":0, "z":0},
        "translate": {"x":0, "y":0, "z":0},
    },
    "operation": "turn",
    "turn": {
        "tool": 1,
        // ???
    }
}

function turn(part, operation) {
    var m = operation.make_machine();
    
    // TODO lathe operation details.
    /* SVG path operations (already implemented parser in 
     * svg_playground/src/types/parsers/path.h)
     * "profile": "M 100 100 L 200 200"
     * How to create a gcode machining path from that?
     * Want something higher level than a path to gcode path
     * e.g like http://www.cnccookbook.com/CCCNCGCodeG71RoughTurning.htm
     * i.e. G71 Rough turning cycle.
     * Take the path, interpret it as a profile and generate gcode to remove
     * that material from the stock object.
     *
     * NOTE: lathe operations are unimplemented in cxxcam! probably better to 
     * experiment with some part operation that is already implemented.
     */

    print(JSON.stringify(m.generate()));
}
