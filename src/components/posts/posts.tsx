export default function Post(props: { id: string, title: string, userId: string, body: string }) {
    return (
        <div>
            <div>

            </div>
            <div>
                <p>{props.body}</p>
            </div>
        </div>
    )
}