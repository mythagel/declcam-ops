var OP = (function (op) {
    op.face = function (part, op, machine) {
        var stock = machine.stock;
        var bbox = bounding_box(stock);

        machine.feed_rate = 100;
        machine.tool_change(op.face.tool);
        machine.spindle_on(300);

        machine.rapid({x: bbox.min.x, y: bbox.min.y, z: bbox.max.z});
        machine.motion = "incremental";
        machine.linear({z: -op.face.depth});

    /* Face operation
     * take depth amount off the top of the stock.
     *
     * take stock model
     * find bounding box
     * find highest z value of bbox
     * find stock that intersects with bounding volume
     *  of the material to remove
     * remove that material
     *
     * take slices of material by depth_per_pass
     */

    /* Calculating Depth of cut
     * less important when facing but could be general algorithm
     * either it is possible / sensible to cut to full DOC in one go
     * OR take maximum equal divisions of the DOC and use those.
     * Avoid full DOC and then a little bit (excepting rough and finish passes). */

    /* Calculating Feed Rate & spindle speed
     * based on material tables
     * RPM set to value based on MPM rate & tool radius
     * feed rate set to RPM x tool #teeth x chip load (can be calculated from tool) */

    var conf = {
        tool: 1,
        depth: 10,

        /* Optional; Default: 0
         * Only needed when using ball or radius endmill (not flat base)
         * Stepover is a percentage of tool diameter. */
        stepover: 0,

        /* Optional; Default: calculated
         * can be specified manually by user. */
        depth_per_pass: 0,

        /* Optional; Default: calculated
         * can be specified manually by user. */
        feed_rate: 0,

        /* Optional; Default: calculated
         * can be specified manually by user. */
        spindle_speed: 0
    };
}

    return op;
}(OP || {}));
