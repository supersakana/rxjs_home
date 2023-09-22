CREATE TABLE public.messages (id uuid DEFAULT gen_random_uuid() NOT NULL, text text NOT NULL, author_id uuid NOT NULL, created_at timestamp DEFAULT now() NOT NULL, PRIMARY KEY (id));
