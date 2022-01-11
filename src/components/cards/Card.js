import Type from 'prop-types';

export default function Card({ card, ...props }) {
    const { title, content } = card;

    return (
        <div className='card'>
            {props.children}
            <div className='card_content'>
                <h2>{title}</h2>
                <p>{content}</p>
                <button className='btn_cards'>Go somewhere</button>
            </div>          
        </div>
    );
}

Card.propTypes = {
    title: Type.string,
    content: Type.string,
};
