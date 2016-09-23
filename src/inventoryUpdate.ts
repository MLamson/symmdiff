export class InventoryUpdate {
    static update(currentInv: any, newInv: any): any {

        var finalInv = currentInv;

        var tempArray;
        var tempCount;
        var countCheck = true;

        if (currentInv.length === 0) {

            finalInv = newInv;
        }
        else {

            for (var i = 0; i < newInv.length; i++) {

                for (var j = 0; j < newInv.length; j++) {

                    if (newInv[i][1] === currentInv[j][1]) {
                        finalInv[j][0] = newInv[i][0] + currentInv[j][0];
                    }
                }
            }

            for (var a = 0; a < newInv.length; a++) {
                countCheck = true;
                for (var b = 0; b < newInv.length; b++) {
                    if (currentInv[a][1] === newInv[b][1]) {
                        countCheck = false;
                    }
                }
                if (countCheck === true) {
                    finalInv.push(newInv[a]);
                    countCheck = false;
                }
            }
        }

        finalInv.sort(this.Comparator);

        return finalInv;
    }

    static Comparator(a, b): any {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
    }

}
