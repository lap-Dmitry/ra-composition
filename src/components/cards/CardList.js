import Type from 'prop-types';
import Card from './Card';
import ImageCap from './ImageCap';


export default function CardList({ cards }) {
    return (
        <div className="cards_box">
            {cards.map((card, idx) => (<Card key={idx} card={card}>
                {<ImageCap img={card.img} />}
                </Card>))}
        </div>
    );
}

CardList.propTypes = {
    cards: Type.array.isRequired,
};
