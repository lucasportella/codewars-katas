function isDivisible(...n){
    for (i = 1; i < n.length; i += 1) {
        if (n[0] % n[i] !== 0) {
            return false;
        }
    }
    return true
  }