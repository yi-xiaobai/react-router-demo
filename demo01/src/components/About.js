export default function About(props) {
    console.log('==>Get props', props);
    return (
        <div>
            <h1>aBOUT组件==={props.match.params.id}</h1>
        </div>
    )
}