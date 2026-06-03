DROP POLICY IF EXISTS "Public can view approved comments" ON public.blog_comments;
DROP POLICY IF EXISTS "Anyone can post comments" ON public.blog_comments;
REVOKE SELECT, INSERT ON public.blog_comments FROM anon;