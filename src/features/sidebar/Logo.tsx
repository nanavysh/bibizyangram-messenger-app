export const MonkeyLogo = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Основной круг головы */}
        <circle cx="100" cy="100" r="80" fill="#8B4513" />

        {/* Уши */}
        <circle cx="30" cy="90" r="25" fill="#8B4513" />
        <circle cx="170" cy="90" r="25" fill="#8B4513" />
        <circle cx="30" cy="90" r="15" fill="#DEB887" />
        <circle cx="170" cy="90" r="15" fill="#DEB887" />

        {/* Мордочка (светлая часть) */}
        <ellipse cx="100" cy="115" rx="60" ry="50" fill="#DEB887" />

        {/* Глаза */}
        <circle cx="75" cy="100" r="8" fill="#333" />
        <circle cx="125" cy="100" r="8" fill="#333" />

        {/* Нос */}
        <path d="M90 120 Q100 130 110 120" stroke="#333" strokeWidth="3" strokeLinecap="round" />

        {/* Улыбка */}
        <path d="M75 140 Q100 155 125 140" stroke="#333" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
);
