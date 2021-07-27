import './Table.css';
import Td from '../Td/Td';
import {appSelector} from '../../redux/app-reducer';
import {useSelector, useDispatch} from 'react-redux';
import {setDropSquare} from '../../redux/app-reducer'; 

function Table() {

    const {data} = useSelector(appSelector);

    const dispatch = useDispatch();

    function enter(e){
        const row = e.target.parentElement.dataset.num;
        const column = e.target.dataset.num;
        const position = {row, column};
        dispatch(setDropSquare(position));
    }

    return <table onDragEnter={e => enter(e)}>
        <tr>
            <th>Color Red</th>
            <th>Color Green</th>
            <th>Color Blue</th>
        </tr>
        {data.map((d,i) => <tr key={i} data-num={i}>
                <Td  number='0' color={d.color1}/>
                <Td  number='1' color={d.color2}/>
                <Td  number='3' color={d.color3}/>
            </tr>)}
    </table>
}

export default Table;