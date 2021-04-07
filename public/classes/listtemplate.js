var ListTemplet = /** @class */ (function () {
    function ListTemplet(container) {
        this.container = container;
    }
    ListTemplet.prototype.redner = function (item, heading, position) {
        var li = document.createElement('li'); //automatically infers the type
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        //set the position
        if (position === 'start')
            this.container.prepend(li);
        else
            this.container.append(li);
    };
    return ListTemplet;
}());
export default ListTemplet;
