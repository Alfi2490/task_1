import './Table.css';
import Td from '../Td/Td';
import {appSelector} from '../../redux/app-reducer';
import {useSelector, useDispatch} from 'react-redux';
import {setDropSquare, switchColor} from '../../redux/app-reducer'; 

function Table() {

    const {data, dropSquare, dragSquare} = useSelector(appSelector);

    const dispatch = useDispatch();

    function enter(e){
        const row = e.target.parentElement.dataset.num;
        const column = e.target.dataset.num;
        const position = {row, column};
        dispatch(setDropSquare(position));
    }

    function end(){
        const drag = {...dragSquare};
        const drop = {...dropSquare};
        const dt = [...data];
        if(drag.row !== drop.row && drag.column === drop.column){
            const tmp1 = dt[drag.row];
            const tmp2 = dt[drop.row];
            dt[drag.row] = tmp2;
            dt[drop.row] = tmp1;
            dispatch(switchColor(dt));
        }
        if(drag.column !== drop.column && drag.row === drop.row){
            for(let i = 0; i < dt.length; i++){
                const d = [dt[i].color1,dt[i].color2,dt[i].color3];
                const tmp1 = d[drag.column];
                const tmp2 = d[drop.column];
                d[drag.column] = tmp2;
                d[drop.column] = tmp1;
                dt[i] = {color1:d[0],color2:d[1],color3:d[2]};
            };
            dispatch(switchColor(dt));
        } 
    }

    return <table 
            onDragEnter={e => enter(e)}
            onDragEnd={() => end()}>
        <tr>
            <th>Color 1</th>
            <th>Color 2</th>
            <th>Color 3</th>
        </tr>
        {data.map((d,i) => <tr key={i} data-num={i}>
                <Td  number='0' color={d.color1}/>
                <Td  number='1' color={d.color2}/>
                <Td  number='2' color={d.color3}/>
            </tr>)}
    </table>
}

export default Table;