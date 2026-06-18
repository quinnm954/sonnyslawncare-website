DROP TABLE IF EXISTS public.blog_comments CASCADE;

CREATE POLICY "Customers read own inspection photos"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'inspection-photos'
  AND EXISTS (
    SELECT 1
    FROM public.inspection_items ii
    JOIN public.inspections i ON i.id = ii.inspection_id
    WHERE i.customer_id = auth.uid()
      AND ii.photo_urls ? storage.objects.name
  )
);