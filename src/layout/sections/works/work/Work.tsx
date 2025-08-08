// import React from 'react';
// import {Link} from "../../../../components/Link";
// import {StyleButton} from "../../../../components/Button";
// import {SW} from "./WorksStyles"
//
// type WorkPropsType = {
//     title: string
//     text: string
//     src: string
// }
//
//
// export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
//     return (
//         <SW.Work>
//             <SW.ImageWrapper>
//                 <SW.Image src={props.src} alt={props.title} />
//                 <StyleButton>Подробнее</StyleButton>
//             </SW.ImageWrapper>
//             <SW.Description>
//                 <SW.Title>{props.title}</SW.Title>
//                 <SW.Text>{props.text}</SW.Text>
//                 {/*<Link active href={"#"}>visit</Link>*/}
//                 <Link href={"https://ivanbliudnik.github.io/coffeeShopMenu-FCC/"}>take a look</Link>
//                 <Link href={"https://ivanbliudnik.github.io/CaveGame/"}>lets play</Link>
//                 <Link href={"https://gsiztest.tilda.ws/"}>Посетить сайт организации</Link>
//             </SW.Description>
//         </SW.Work>
//     );
// };



// import React, { useState } from 'react';
// import { Link } from "../../../../components/Link";
// import { StyleButton } from "../../../../components/Button";
// import { SW } from "./WorksStyles";
//
// type WorkPropsType = {
//     title: string;
//     text: string;
//     src: string;
// };
//
// export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
//     const [isDetailsVisible, setDetailsVisible] = useState(false);
//
//     const handleDetailsClick = () => {
//         setDetailsVisible(!isDetailsVisible);
//     };
//
//     return (
//         <SW.Work>
//             <SW.ImageWrapper>
//                 <SW.Image src={props.src} alt={props.title} />
//                 <StyleButton onClick={handleDetailsClick}>
//                     {isDetailsVisible ? "Скрыть детали" : "Подробнее"}
//                 </StyleButton>
//             </SW.ImageWrapper>
//             <SW.Description>
//                 <SW.Title>{props.title}</SW.Title>
//                 <SW.Text>{props.text}</SW.Text>
//                 {isDetailsVisible && (
//                     <SW.Description>
//                         {/* Здесь можно добавить дополнительную информацию */}
//                         <p>Дополнительная информация о {props.title}.</p>
//                     </SW.Description>
//                 )}
//                 <Link href={"https://ivanbliudnik.github.io/coffeeShopMenu-FCC/"}>Посмотреть меню кафе</Link>
//                 <Link href={"https://ivanbliudnik.github.io/CaveGame/"}>Играть в игру</Link>
//                 <Link href={"https://gsiztest.tilda.ws/"}>Посетить сайт организации</Link>
//             </SW.Description>
//         </SW.Work>
//     );
// };

import React, { useState } from 'react';
import { Link } from "../../../../components/Link";
import { StyleButton } from "../../../../components/Button";
import { SW } from "./WorksStyles";

type LinkType = {
    label: string;  // Метка ссылки
    url: string;    // URL ссылки
};

type WorkPropsType = {
    title: string;  // Заголовок работы
    text: string;   // Описание работы
    src: string;    // Путь к изображению
    link: LinkType; // Объект с одной ссылкой
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    const [isDetailsVisible, setDetailsVisible] = useState(false);

    const handleDetailsClick = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    return (
        <SW.Work>
            <SW.ImageWrapper>
                <SW.Image src={props.src} alt={props.title} />
                <StyleButton onClick={handleDetailsClick}>
                    {isDetailsVisible ? "Скрыть детали" : "Подробнее"}
                </StyleButton>
            </SW.ImageWrapper>
            <SW.Description>
                <SW.Title>{props.title}</SW.Title>
                <SW.Text>{props.text}</SW.Text>
                {isDetailsVisible && (
                    <SW.Description>
                        <p>Дополнительная информация о {props.title}.</p>
                    </SW.Description>
                )}
                <Link href={props.link.url}>{props.link.label}</Link>
            </SW.Description>
        </SW.Work>
    );
};