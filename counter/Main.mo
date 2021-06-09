actor {
    stable var count: Nat = 0;
    public func incr() : async Nat {
        count += 1;
        return count;
    };
};
