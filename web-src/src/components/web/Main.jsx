import React, { createRef, useEffect, useRef, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import koLocale from "@fullcalendar/core/locales/ko";

function Main() {
    const today = new Date();
    today.setDate(1);

    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 2);
    nextMonth.setDate(0);

    const specialDate = "2023-11-08"; // 특정 날짜를 지정합니다

    const dayNumberText = (arg) => {
        const cellDate = arg.date.toISOString().split("T")[0];
        if (cellDate === specialDate) {
            // classes가 없을 경우 빈 배열을 생성하고 "special-date" 클래스를 추가합니다.
            arg.classes = (arg.classes || []).concat(["special-date"]);
        }

        // arg.date는 각 날짜 셀의 날짜를 나타냅니다.
        // 원하는 형식으로 날짜를 변환하여 반환합니다.
        return arg.date.getDate().toString();
    };

    const dateClick = (info) => {
        alert(info.dateStr);
    };

    return (
        <>
            <div
                id="container"
                style={{
                    padding: 15,
                }}
            >
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    height={"85vh"}
                    contentHeight="auto"
                    dateClick={dateClick}
                    initialDate={today}
                    validRange={{ start: today, end: nextMonth }}
                    locales={[koLocale]}
                    dayCellContent={dayNumberText} // 날짜 셀 텍스트를 설정합니다
                    headerToolbar={{
                        start: "prev", // 이전 달 화살표
                        center: "title",
                        end: "next", // 다음 달 화살표
                    }}
                />
            </div>
        </>
    );
}

export default Main;
