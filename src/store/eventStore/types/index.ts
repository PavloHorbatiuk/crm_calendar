export interface Event {
  id?: number;
  name: string;
  date: Date;
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
  getAllEvents: () => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
  setError: (error: string | undefined) => void;
}
