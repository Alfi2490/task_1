import './Table.css';
import {appSelector} from '../../redux/app-reducer';
import {useSelector} from 'react-redux'; 

function Table() {

    const {data} = useSelector(appSelector);

    function enter(e){
        console.log(e.target.parentElement.dataset.num,e.target.dataset.num);
    }

    return <table onDragEnter={e => enter(e)}>
        <tr><th>Color Red</th><th>Color Green</th><th>Color Blue</th></tr>
        {data.map((d,i) => <tr key={i} data-num={i}>
                <td draggable data-num={0} style={{backgroundColor:`${d.color1}`}}></td>
                <td draggable data-num={1} style={{backgroundColor:`${d.color2}`}}></td>
                <td draggable data-num={2} style={{backgroundColor:`${d.color3}`}}></td>
            </tr>)}
    </table>
}

export default Table;