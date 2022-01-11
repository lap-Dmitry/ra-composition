import Type from 'prop-types';

export default function ImageCap({ img }) {
    if (!img) {
        return null;
    }

    return (
        <img src={img} alt="" />
    );
}

ImageCap.propTypes = {
    img: Type.oneOfType([
        Type.bool,
        Type.string,
    ]),
};
