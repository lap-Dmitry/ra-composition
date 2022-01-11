// Показывает верхний блок с рекламой и новостями

import NewsWidget from './NewWidget';
import AdvWidget from './AdvWidget';
import * as DB from '../../../models/Content';

export default function TopBlock() {
    return (
        <div className='top_block'>
            <NewsWidget news={DB.news} />
            <AdvWidget />
        </div>
    );
}
