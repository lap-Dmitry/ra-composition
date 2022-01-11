// Показывает поисковый блок

import SearchCategoties from './SearchCategories';
import SearchExample from './SearchExample';
import SearchInput from './SearchInput';
import { categories } from '../../../models/Content';

export default function SearchBlock() {
    return (
        <div className='search_block'>
            <SearchCategoties categories={categories} />
            <SearchInput />
            <SearchExample />
        </div>
    );
}
