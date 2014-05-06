var OP = (function (op) {
    op.pocket = function (part, operation, m) {

        print("POCKET_OP " + JSON.stringify(m.generate()));
    }

    return op;
}(OP || {}));
