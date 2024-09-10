const Radius = ({setRadius}) => {

    const onChange = (event) => {
        const value = event.target.value;
        setRadius(value);
    }

    return (
        <form>
            <label for="radius">radius in km from ur current location</label>
        <select id="radius" onChange={onChange}>
            <option>1</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
            <option>1000</option>
            <option>10000</option>
            <label for="radius">km</label>
        </select>
        </form>
    )

}

export default Radius