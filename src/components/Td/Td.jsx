import './Td.css';
import {setDragSquare} from '../../redux/app-reducer';
import {useDispatch} from 'react-redux';

function Td({number,color}){

    const dispatch = useDispatch();

    function clickhandler(e){
        const row = e.target.parentElement.dataset.num;
        const column = e.target.dataset.num;
        const position = {row,column}
        dispatch(setDragSquare(position));
    };

    return <td 
            draggable data-num={number} 
            style={{backgroundColor:`${color}`}}
            onDragStart={e => clickhandler(e)}
        ></td>
};

export default Td;