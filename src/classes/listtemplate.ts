import HasFormatter from "../interfaces/HasFormatter";

class ListTemplet {
    constructor(private container:HTMLUListElement){}
    redner(item:HasFormatter,heading:string,position:'start'|'end')
    {
        const li = document.createElement('li');//automatically infers the type

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        //set the position
        if(position === 'start')
            this.container.prepend(li);
        else this.container.append(li);

    }
}
export default ListTemplet;