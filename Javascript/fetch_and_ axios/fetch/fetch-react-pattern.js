/* 
Transform data from object into an array.... using fetch useEffect and useState.
This works well with Firebase 
*/

export default function AReactComponent() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(API_ENDPOINT)
            .then((response) => {
            return response.json();
            })
            .then(data => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };

                    meetups.push(meetup);
                }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);
    

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <AnotherReactComponent meetups={DUMMY_DATA} />
        </section>
    )
}