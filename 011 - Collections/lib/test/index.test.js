"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
test('Should be able to Create an ArrayList and get the size', function () {
    var al = new src_1.ArrayList(1, 2, 3);
    var al2 = src_1.ArrayList.newList('a', 'b', 'c', 'd');
    var al3 = src_1.ArrayList.newList();
    expect(al.get()).toEqual([1, 2, 3]);
    expect(al.size()).toEqual(3);
    expect(al2.get()).toEqual(['a', 'b', 'c', 'd']);
    expect(al2.size()).toEqual(4);
    expect(al3.get()).toEqual([]);
    expect(al3.size()).toEqual(0);
});
test('Should be able to set a value in an ArrayList', function () {
    var al = new src_1.ArrayList(1, 2, 3);
    al.set(1337, 0);
    expect(al.get()).toEqual([1337, 2, 3]);
});
test('Should be able to add and remove from an ArrayList with objects', function () {
    var al = new src_1.ArrayList({ id: 123456, field: 'value' }, { id: 789012, field: 'value' });
    al.add({ id: 345678, field: 'value' });
    expect(al.get()).toEqual([
        { id: 123456, field: 'value' },
        { id: 789012, field: 'value' },
        { id: 345678, field: 'value' },
    ]);
    al.remove({ id: 789012 });
    expect(al.get()).toEqual([
        { id: 123456, field: 'value' },
        { id: 345678, field: 'value' },
    ]);
});
test('Should be able to add and remove from an ArrayList', function () {
    var al = new src_1.ArrayList(1, 2, 3);
    al.add(4);
    expect(al.get()).toEqual([1, 2, 3, 4]);
    al.remove(1);
    expect(al.get()).toEqual([2, 3, 4]);
});
//# sourceMappingURL=index.test.js.map