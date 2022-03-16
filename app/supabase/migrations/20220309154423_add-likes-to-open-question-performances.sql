-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE OR REPLACE VIEW public.open_question_performances
    AS
     SELECT challenge_pool_user.id,
    open_questions.id AS open_question_id,
    open_questions.question_text,
    correct_open_answers.answer_text,
    open_questions.created_at,
    ( SELECT count(*) AS count
           FROM open_question_likes
          WHERE open_question_likes.open_question = open_questions.id) AS likes
   FROM challenge_pool_user
     JOIN open_questions ON open_questions.owner = challenge_pool_user.user_id
     JOIN correct_open_answers ON correct_open_answers.open_question = open_questions.id;
