import { useCurrentDateTime } from "../../hooks/useCurrentDateTime";

export default function CurrentDateTime() {
    // const { formattedDateTime } = useCurrentDateTime();
    const { formattedDateTime } = useCurrentDateTime();
    return (
    <div>
        <p>現在日時</p>
        <p>{formattedDateTime}</p>
    </div>
    );
}