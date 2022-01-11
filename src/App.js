import './App.css';
import CardList from './components/cards/CardList';
import TopBlock from './components/decomposition/top/TopBlock';
import SearchBlock from './components/decomposition/search/SearchBlock';
import Banner from './components/decomposition/banner/Banner';
import ArticlesWidget from './components/decomposition/articles/ArticlesWidget';
import { articles, list } from './models/Content';

function App() {
  return (
    <>
    <div className='container'>
      <div className='title'>Карточки</div>
      <CardList cards={list} />
    </div>
    <div className='container'>
      <div className='title'>Декомпозиция</div>
      <div className='wrapper_box'>
        <TopBlock />
        <SearchBlock />
        <Banner />
        <ArticlesWidget articles={articles}/>
      </div>
    </div>
    </>
  );
}

export default App;
