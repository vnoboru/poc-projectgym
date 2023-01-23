--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: exercices; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercices (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    "bodyPart" character varying(255) NOT NULL
);


--
-- Name: exercices_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exercices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exercices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exercices_id_seq OWNED BY public.exercices.id;


--
-- Name: exercices id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercices ALTER COLUMN id SET DEFAULT nextval('public.exercices_id_seq'::regclass);


--
-- Data for Name: exercices; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.exercices VALUES (1, 'Supino Declinado com Halteres', 'Peito');
INSERT INTO public.exercices VALUES (3, 'Supino Inclinado com Halteres', 'Peito');
INSERT INTO public.exercices VALUES (4, 'Supino Reto', 'Peito');
INSERT INTO public.exercices VALUES (5, 'Legg Press 45', 'Perna');


--
-- Name: exercices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.exercices_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

