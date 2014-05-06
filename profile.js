var OP = (function (op) {
    op.profile = function (part, operation, m) {

        print("PROFILE_OP " + JSON.stringify(m.generate()));
    }

    return op;
}(OP || {}));
