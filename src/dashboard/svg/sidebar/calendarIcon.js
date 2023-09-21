import * as React from "react";
const SVGComponent = (props) => (
    <svg
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.5 12.4166C10.6895 12.4166 10.8748 12.3604 11.0324 12.2551C11.19 12.1498 11.3129 12.0001 11.3854 11.825C11.4579 11.6499 11.4769 11.4572 11.4399 11.2713C11.4029 11.0854 11.3117 10.9147 11.1776 10.7806C11.0436 10.6466 10.8729 10.5554 10.687 10.5184C10.5011 10.4814 10.3084 10.5004 10.1333 10.5729C9.95815 10.6454 9.80848 10.7683 9.70318 10.9259C9.59788 11.0835 9.54167 11.2688 9.54167 11.4583C9.54167 11.7125 9.64264 11.9562 9.82236 12.1359C10.0021 12.3157 10.2458 12.4166 10.5 12.4166ZM15.2917 12.4166C15.4812 12.4166 15.6665 12.3604 15.8241 12.2551C15.9817 12.1498 16.1045 12.0001 16.1771 11.825C16.2496 11.6499 16.2686 11.4572 16.2316 11.2713C16.1946 11.0854 16.1033 10.9147 15.9693 10.7806C15.8353 10.6466 15.6645 10.5554 15.4786 10.5184C15.2927 10.4814 15.1 10.5004 14.9249 10.5729C14.7498 10.6454 14.6001 10.7683 14.4948 10.9259C14.3895 11.0835 14.3333 11.2688 14.3333 11.4583C14.3333 11.7125 14.4343 11.9562 14.614 12.1359C14.7937 12.3157 15.0375 12.4166 15.2917 12.4166ZM10.5 16.25C10.6895 16.25 10.8748 16.1938 11.0324 16.0885C11.19 15.9831 11.3129 15.8335 11.3854 15.6584C11.4579 15.4833 11.4769 15.2906 11.4399 15.1047C11.4029 14.9188 11.3117 14.748 11.1776 14.614C11.0436 14.48 10.8729 14.3887 10.687 14.3517C10.5011 14.3147 10.3084 14.3337 10.1333 14.4062C9.95815 14.4788 9.80848 14.6016 9.70318 14.7592C9.59788 14.9168 9.54167 15.1021 9.54167 15.2916C9.54167 15.5458 9.64264 15.7895 9.82236 15.9693C10.0021 16.149 10.2458 16.25 10.5 16.25ZM15.2917 16.25C15.4812 16.25 15.6665 16.1938 15.8241 16.0885C15.9817 15.9831 16.1045 15.8335 16.1771 15.6584C16.2496 15.4833 16.2686 15.2906 16.2316 15.1047C16.1946 14.9188 16.1033 14.748 15.9693 14.614C15.8353 14.48 15.6645 14.3887 15.4786 14.3517C15.2927 14.3147 15.1 14.3337 14.9249 14.4062C14.7498 14.4788 14.6001 14.6016 14.4948 14.7592C14.3895 14.9168 14.3333 15.1021 14.3333 15.2916C14.3333 15.5458 14.4343 15.7895 14.614 15.9693C14.7937 16.149 15.0375 16.25 15.2917 16.25ZM5.70834 12.4166C5.89788 12.4166 6.08316 12.3604 6.24076 12.2551C6.39836 12.1498 6.52119 12.0001 6.59372 11.825C6.66626 11.6499 6.68524 11.4572 6.64826 11.2713C6.61128 11.0854 6.52001 10.9147 6.38598 10.7806C6.25196 10.6466 6.0812 10.5554 5.8953 10.5184C5.7094 10.4814 5.51671 10.5004 5.3416 10.5729C5.16649 10.6454 5.01682 10.7683 4.91151 10.9259C4.80621 11.0835 4.75001 11.2688 4.75001 11.4583C4.75001 11.7125 4.85097 11.9562 5.03069 12.1359C5.21042 12.3157 5.45417 12.4166 5.70834 12.4166ZM17.2083 2.83329H16.25V1.87496C16.25 1.62079 16.149 1.37704 15.9693 1.19732C15.7896 1.01759 15.5458 0.916626 15.2917 0.916626C15.0375 0.916626 14.7937 1.01759 14.614 1.19732C14.4343 1.37704 14.3333 1.62079 14.3333 1.87496V2.83329H6.66667V1.87496C6.66667 1.62079 6.5657 1.37704 6.38598 1.19732C6.20626 1.01759 5.9625 0.916626 5.70834 0.916626C5.45417 0.916626 5.21042 1.01759 5.03069 1.19732C4.85097 1.37704 4.75001 1.62079 4.75001 1.87496V2.83329H3.79167C3.02917 2.83329 2.29791 3.13619 1.75874 3.67536C1.21957 4.21453 0.916672 4.9458 0.916672 5.70829V17.2083C0.916672 17.9708 1.21957 18.7021 1.75874 19.2412C2.29791 19.7804 3.02917 20.0833 3.79167 20.0833H17.2083C17.9708 20.0833 18.7021 19.7804 19.2413 19.2412C19.7804 18.7021 20.0833 17.9708 20.0833 17.2083V5.70829C20.0833 4.9458 19.7804 4.21453 19.2413 3.67536C18.7021 3.13619 17.9708 2.83329 17.2083 2.83329ZM18.1667 17.2083C18.1667 17.4625 18.0657 17.7062 17.886 17.8859C17.7063 18.0657 17.4625 18.1666 17.2083 18.1666H3.79167C3.53751 18.1666 3.29375 18.0657 3.11403 17.8859C2.93431 17.7062 2.83334 17.4625 2.83334 17.2083V8.58329H18.1667V17.2083ZM18.1667 6.66663H2.83334V5.70829C2.83334 5.45413 2.93431 5.21037 3.11403 5.03065C3.29375 4.85093 3.53751 4.74996 3.79167 4.74996H17.2083C17.4625 4.74996 17.7063 4.85093 17.886 5.03065C18.0657 5.21037 18.1667 5.45413 18.1667 5.70829V6.66663ZM5.70834 16.25C5.89788 16.25 6.08316 16.1938 6.24076 16.0885C6.39836 15.9831 6.52119 15.8335 6.59372 15.6584C6.66626 15.4833 6.68524 15.2906 6.64826 15.1047C6.61128 14.9188 6.52001 14.748 6.38598 14.614C6.25196 14.48 6.0812 14.3887 5.8953 14.3517C5.7094 14.3147 5.51671 14.3337 5.3416 14.4062C5.16649 14.4788 5.01682 14.6016 4.91151 14.7592C4.80621 14.9168 4.75001 15.1021 4.75001 15.2916C4.75001 15.5458 4.85097 15.7895 5.03069 15.9693C5.21042 16.149 5.45417 16.25 5.70834 16.25Z"
            fill="white"
        />
    </svg>
);
export default SVGComponent;