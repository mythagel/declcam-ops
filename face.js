
function face(part, operation) {
    var m = operation.make_machine();
    
    /* Face operation
     * take depth amount off the top of the stock.
     *
     * take stock model
     * find bounding box
     * find highest z value of bbox
     * find stock that intersects with bounding volume
     *  of the material to remove
     * remove that material
     */
    
    print(JSON.stringify(m.generate()));
}
