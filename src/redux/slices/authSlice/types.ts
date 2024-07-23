// export type NewsItem = {
//   id: number;
//   title: string;
//   body: string;
// };

export interface AuthState {
  // news: NewsItem[];
  isLoggedIn: boolean;
  isConfirming: boolean;
  isConfirmingPhone: boolean;
  status: "rejected" | "additional" | "underverification" | "ok";
}
