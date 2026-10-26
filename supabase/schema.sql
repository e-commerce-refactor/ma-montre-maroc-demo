-- Supabase Schema for Ma Montre Maroc Cash-on-Delivery (COD) Orders
CREATE TABLE IF NOT EXISTS public.orders (
    id BIGSERIAL PRIMARY KEY,
    ref TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT,
    items_summary TEXT NOT NULL,
    total NUMERIC NOT NULL,
    status TEXT DEFAULT 'en_attente',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public insert to orders') THEN
        CREATE POLICY "Allow public insert to orders" ON public.orders FOR INSERT TO anon WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow anon read orders') THEN
        CREATE POLICY "Allow anon read orders" ON public.orders FOR SELECT TO anon USING (true);
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_orders_phone ON public.orders (phone);
CREATE INDEX IF NOT EXISTS idx_orders_ref ON public.orders (ref);
