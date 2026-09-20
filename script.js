/* ==========================================
   CALISTHENICS WORKOUT TRACKER
========================================== */


/* ==========================================
   WORKOUT DATA
========================================== */

/*
    JavaScript day numbers:

    Sunday    = 0
    Monday    = 1
    Tuesday   = 2
    Wednesday = 3
    Thursday  = 4
    Friday    = 5
    Saturday  = 6
*/


const workouts = {

    1: {

        name: "Upper Body + Arms",

        focus:
            "Chest • Triceps • Biceps • Core",

        exercises: [

            {
                name: "Push-ups",
                target: "2 × 8–12",
                muscle: "Chest + Triceps",
                image: "💪"
            },

            {
                name: "Close-grip Push-ups",
                target: "2 × 6–10",
                muscle: "Triceps",
                image: "🔥"
            },

            {
                name: "Backpack Biceps Curls",
                target: "2 × 10–12",
                muscle: "Biceps",
                image: "🎒"
            },

            {
                name: "Forearm Plank",
                target: "2 × 20–40 sec",
                muscle: "Core",
                image: "⚡"
            }

        ]

    },


    2: {

        name: "Legs + Light Cardio",

        focus:
            "Legs • Glutes • Fitness",

        exercises: [

            {
                name: "Bodyweight Squats",
                target: "2 × 12–15",
                muscle: "Legs",
                image: "🦵"
            },

            {
                name: "Reverse Lunges",
                target: "2 × 8 each leg",
                muscle: "Legs + Balance",
                image: "🏃"
            },

            {
                name: "Calf Raises",
                target: "2 × 15–20",
                muscle: "Calves",
                image: "👟"
            },

            {
                name: "Brisk Walk / Easy Sport",
                target: "15–20 min",
                muscle: "Cardio",
                image: "🚴"
            }

        ]

    },


    3: {

        name: "Core + Mobility",

        focus:
            "Abs • Core Stability • Mobility",

        exercises: [

            {
                name: "Dead Bugs",
                target: "2 × 8 each side",
                muscle: "Core",
                image: "🪲"
            },

            {
                name: "Forearm Plank",
                target: "2 × 20–40 sec",
                muscle: "Core",
                image: "⚡"
            },

            {
                name: "Bird Dogs",
                target: "2 × 8 each side",
                muscle: "Core + Balance",
                image: "🐕"
            },

            {
                name: "Gentle Stretching",
                target: "3–5 min",
                muscle: "Mobility",
                image: "🧘"
            }

        ]

    },


    4: {

        name: "Upper Body + Arms",

        focus:
            "Chest • Triceps • Biceps",

        exercises: [

            {
                name: "Push-ups",
                target: "2 × 8–12",
                muscle: "Chest + Triceps",
                image: "💪"
            },

            {
                name: "Close-grip Push-ups",
                target: "2 × 6–10",
                muscle: "Triceps",
                image: "🔥"
            },

            {
                name: "Backpack Biceps Curls",
                target: "2 × 10–12",
                muscle: "Biceps",
                image: "🎒"
            },

            {
                name: "Shoulder Mobility",
                target: "3 min",
                muscle: "Shoulders",
                image: "🔄"
            }

        ]

    },


    5: {

        name: "Legs + Core",

        focus:
            "Legs • Glutes • Abs",

        exercises: [

            {
                name: "Bodyweight Squats",
                target: "2 × 12–15",
                muscle: "Legs",
                image: "🦵"
            },

            {
                name: "Glute Bridges",
                target: "2 × 12–15",
                muscle: "Glutes",
                image: "🌉"
            },

            {
                name: "Dead Bugs",
                target: "2 × 8 each side",
                muscle: "Core",
                image: "🪲"
            },

            {
                name: "Side Plank",
                target: "2 × 15–30 sec / side",
                muscle: "Obliques + Core",
                image: "↔️"
            }

        ]

    },


    6: {

        name: "Sports + Fun Activity",

        focus:
            "Badminton • Volleyball • Cycling • Walking",

        exercises: [

            {
                name: "Badminton / Volleyball",
                target: "20–40 min",
                muscle: "Cardio + Coordination",
                image: "🏸"
            },

            {
                name: "Cycling",
                target: "20–40 min",
                muscle: "Cardio",
                image: "🚲"
            },

            {
                name: "Easy Walk",
                target: "20–40 min",
                muscle: "Active Recovery",
                image: "🚶"
            },

            {
                name: "Cool-down Stretch",
                target: "3–5 min",
                muscle: "Recovery",
                image: "🧘"
            }

        ]

    },


    0: {

        name: "Recovery Day",

        focus:
            "Recovery • Easy Movement",

        exercises: [

            {
                name: "Easy Walk",
                target: "10–20 min",
                muscle: "Light Movement",
                image: "🚶"
            },

            {
                name: "Gentle Stretching",
                target: "5–10 min",
                muscle: "Mobility",
                image: "🧘"
            },

            {
                name: "Hydration + Normal Meals",
                target: "Throughout day",
                muscle: "Recovery",
                image: "💧"
            },

            {
                name: "Good Sleep",
                target: "8–10 hours",
                muscle: "Recovery",
                image: "😴"
            }

        ]

    }

};


/* ==========================================
   STORAGE
========================================== */

const STORAGE_KEY =
    "calisthenics_tracker_v1";


let savedData =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
    );


/* ==========================================
   CURRENT DATES
========================================== */

let calendarDate =
    new Date();

let selectedDate =
    new Date();


/* ==========================================
   HELPER FUNCTIONS
========================================== */


function dateKey(date) {

    return (

        date.getFullYear() +
        "-" +

        String(
            date.getMonth() + 1
        ).padStart(2, "0") +

        "-" +

        String(
            date.getDate()
        ).padStart(2, "0")

    );

}


function saveData() {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(savedData)

    );

}


function getWorkout(date) {

    return workouts[
        date.getDay()
    ];

}


function getCompletedExercises(date) {

    return (
        savedData[
            dateKey(date)
        ] || []
    );

}


function workoutIsComplete(date) {

    const workout =
        getWorkout(date);

    const completed =
        getCompletedExercises(date);

    return (

        completed.length ===
        workout.exercises.length

    );

}


function formatDate(date) {

    return date.toLocaleDateString(

        undefined,

        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }

    );

}


/* ==========================================
   CALENDAR
========================================== */

function renderCalendar() {

    const calendar =
        document.getElementById(
            "calendar"
        );

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    document.getElementById(
        "monthTitle"
    ).textContent =

        calendarDate.toLocaleDateString(

            undefined,

            {
                month: "long",
                year: "numeric"
            }

        );


    calendar.innerHTML = "";


    /* WEEKDAY HEADERS */

    const weekdays = [

        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"

    ];


    weekdays.forEach(

        day => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "weekday";

            element.textContent =
                day;

            calendar.appendChild(
                element
            );

        }

    );


    /* FIRST DAY */

    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    /* NUMBER OF DAYS */

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    /* EMPTY CELLS */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "day empty";

        calendar.appendChild(
            empty
        );

    }


    /* DAYS */

    for (
        let number = 1;
        number <= daysInMonth;
        number++
    ) {

        const date =
            new Date(
                year,
                month,
                number
            );


        const day =
            document.createElement(
                "button"
            );

        day.className =
            "day";


        /* TODAY */

        const today =
            new Date();


        if (
            dateKey(date) ===
            dateKey(today)
        ) {

            day.classList.add(
                "today"
            );

        }


        /* WORKOUT DAY */

        if (
            date.getDay() >= 1 &&
            date.getDay() <= 6
        ) {

            day.classList.add(
                "workout-day"
            );

        }


        /* SELECTED */

        if (
            dateKey(date) ===
            dateKey(selectedDate)
        ) {

            day.classList.add(
                "selected"
            );

        }


        /* COMPLETED */

        const completed =
            workoutIsComplete(date);


        if (completed) {

            day.classList.add(
                "completed"
            );

        }


        day.innerHTML = `

            <span class="day-number">
                ${number}
            </span>

            <span class="day-name">
                ${getWorkout(date).name}
            </span>

            ${
                completed
                ?
                `<span class="check">✓</span>`
                :
                ""
            }

        `;


        day.addEventListener(

            "click",

            () => {

                selectedDate =
                    date;

                renderCalendar();

                renderWorkout();

                renderStats();


                document
                    .getElementById(
                        "workoutSection"
                    )
                    .scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

            }

        );


        calendar.appendChild(
            day
        );

    }

}


/* ==========================================
   WORKOUT DISPLAY
========================================== */

function renderWorkout() {

    const workout =
        getWorkout(
            selectedDate
        );


    const completed =
        getCompletedExercises(
            selectedDate
        );


    document.getElementById(
        "workoutTitle"
    ).textContent =
        workout.name;


    document.getElementById(
        "workoutSubtitle"
    ).textContent =

        formatDate(
            selectedDate
        ) +

        " • " +

        workout.focus;


    document.getElementById(
        "dayBadge"
    ).textContent =

        selectedDate
            .toLocaleDateString(
                undefined,
                {
                    weekday: "short"
                }
            )
            .toUpperCase();


    const list =
        document.getElementById(
            "exerciseList"
        );


    list.innerHTML = "";


    workout.exercises.forEach(

        (exercise, index) => {

            const element =
                document.createElement(
                    "label"
                );


            const isDone =
                completed.includes(
                    index
                );


            element.className =
                "exercise";


            if (isDone) {

                element.classList.add(
                    "done"
                );

            }


            /*
                IMPORTANT:

                To use actual images later,
                replace exercise.image
                with an <img> element.

                Example:

                <img src="images/pushups.jpg">

            */

            element.innerHTML = `

                <div class="exercise-image">

                    ${exercise.image}

                </div>


                <div>

                    <h4>
                        ${exercise.name}
                    </h4>

                    <p>
                        ${exercise.target}
                        •
                        ${exercise.muscle}
                    </p>

                </div>


                <input
                    type="checkbox"
                    ${isDone ? "checked" : ""}
                >

            `;


            const checkbox =
                element.querySelector(
                    "input"
                );


            checkbox.addEventListener(

                "change",

                () => {

                    let current =
                        getCompletedExercises(
                            selectedDate
                        );


                    if (
                        checkbox.checked
                    ) {

                        if (
                            !current.includes(
                                index
                            )
                        ) {

                            current.push(
                                index
                            );

                        }

                    } else {

                        current =
                            current.filter(
                                item =>
                                    item !== index
                            );

                    }


                    savedData[
                        dateKey(
                            selectedDate
                        )
                    ] = current;


                    saveData();

                    renderCalendar();

                    renderWorkout();

                    renderStats();

                }

            );


            list.appendChild(
                element
            );

        }

    );


    /* SESSION PROGRESS */

    const total =
        workout.exercises.length;

    const completedCount =
        completed.length;


    const percentage =
        Math.round(
            completedCount /
            total *
            100
        );


    document.getElementById(
        "sessionProgress"
    ).textContent =

        `${completedCount} / ${total}`;


    document.getElementById(
        "sessionBar"
    ).style.width =

        percentage + "%";


    /* COMPLETION BANNER */

    document
        .getElementById(
            "completionBanner"
        )
        .classList.toggle(

            "hidden",

            percentage !== 100

        );

}


/* ==========================================
   STATISTICS
========================================== */

function getCompletedWorkoutDates() {

    return Object.keys(
        savedData
    ).filter(

        key => {

            const date =
                new Date(
                    key + "T12:00:00"
                );

            return workoutIsComplete(
                date
            );

        }

    );

}


function renderStats() {

    const today =
        new Date();


    /*
        Find Monday of current week.
    */

    const monday =
        new Date(today);


    const day =
        today.getDay();


    const difference =
        day === 0
        ? 6
        : day - 1;


    monday.setDate(
        today.getDate() -
        difference
    );


    let completedDays = 0;

    let completedExercises = 0;


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const date =
            new Date(monday);


        date.setDate(
            monday.getDate() + i
        );


        if (
            workoutIsComplete(
                date
            )
        ) {

            completedDays++;

        }


        /*
            Don't count future
            days' exercises.
        */

        if (
            date <= today
        ) {

            completedExercises +=

                getCompletedExercises(
                    date
                ).length;

        }

    }


    const weeklyPercentage =
        Math.round(
            completedDays / 7 * 100
        );


    document.getElementById(
        "weekProgress"
    ).textContent =

        weeklyPercentage + "%";


    document.getElementById(
        "totalWorkouts"
    ).textContent =

        getCompletedWorkoutDates()
            .length;


    document.getElementById(
        "exerciseProgress"
    ).textContent =

        completedExercises;


    /* STREAK */

    let streak = 0;

    let checkDate =
        new Date();


    /*
        If today isn't complete,
        check yesterday.
    */

    if (
        !workoutIsComplete(
            checkDate
        )
    ) {

        checkDate.setDate(
            checkDate.getDate() - 1
        );

    }


    while (
        workoutIsComplete(
            checkDate
        )
    ) {

        streak++;

        checkDate.setDate(
            checkDate.getDate() - 1
        );

    }


    document.getElementById(
        "streak"
    ).textContent = streak;

}


/* ==========================================
   RESET DAY
========================================== */

document
    .getElementById(
        "resetDay"
    )
    .addEventListener(

        "click",

        () => {

            const answer =
                confirm(
                    "Reset all exercises for this day?"
                );


            if (!answer) {

                return;

            }


            delete savedData[
                dateKey(
                    selectedDate
                )
            ];


            saveData();

            renderCalendar();

            renderWorkout();

            renderStats();

        }

    );


/* ==========================================
   PREVIOUS MONTH
========================================== */

document
    .getElementById(
        "previousMonth"
    )
    .addEventListener(

        "click",

        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }

    );


/* ==========================================
   NEXT MONTH
========================================== */

document
    .getElementById(
        "nextMonth"
    )
    .addEventListener(

        "click",

        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }

    );


/* ==========================================
   TODAY BUTTON
========================================== */

document
    .getElementById(
        "todayButton"
    )
    .addEventListener(

        "click",

        () => {

            calendarDate =
                new Date();

            selectedDate =
                new Date();

            renderCalendar();

            renderWorkout();

            renderStats();


            document
                .getElementById(
                    "workoutSection"
                )
                .scrollIntoView({

                    behavior: "smooth"

                });

        }

    );


/* ==========================================
   INITIAL LOAD
========================================== */

renderCalendar();

renderWorkout();

renderStats();
