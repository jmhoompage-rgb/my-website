export default function KakaoButton() {
  return (
    <a
      // TODO: 실제 카카오톡 오픈채팅 링크로 교체
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 오픈채팅 문의"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ backgroundColor: "#FEE500" }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3C6.477 3 2 6.418 2 10.636c0 2.667 1.79 5.012 4.49 6.37-.198.717-.716 2.6-.82 3.005-.13.5.183.494.386.36.16-.107 2.53-1.71 3.556-2.4.777.112 1.573.17 2.388.17 5.523 0 10-3.418 10-7.635C22 6.418 17.523 3 12 3Z"
          fill="#191919"
        />
      </svg>
    </a>
  );
}
