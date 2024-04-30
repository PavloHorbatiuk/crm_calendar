export interface Event {
  name: string;
  dateTime: Date;
  isDone: boolean;
  price: number;
}

export interface EventSchema {
  events: Event[];
  loading: boolean;
  success: boolean;
  error: string | undefined;
}

export interface EventAction {
  createEvent: (event: Event) => Promise<void>;
}
