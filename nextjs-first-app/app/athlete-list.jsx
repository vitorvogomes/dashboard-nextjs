'use client'
export default function AthleteList() {
    const atletas = ['Greyson Fletcher', 'Gabriel Medina', 'Axell Hodges'];
    return (
        <ul>
            {atletas.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    );
}