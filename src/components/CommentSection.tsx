"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabase, type Comment } from "@/lib/supabase";

type SortMode = "hot" | "newest";

function timeAgo(dateStr: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function CommentForm({
  onSubmit,
  parentId = null,
  placeholder = "Share your thoughts\u2026",
  onCancel,
}: {
  onSubmit: (name: string, content: string, parentId: string | null) => void;
  parentId?: string | null;
  placeholder?: string;
  onCancel?: () => void;
}) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pe-comment-name");
    if (saved) setName(saved);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    setSubmitting(true);
    localStorage.setItem("pe-comment-name", name.trim());
    await onSubmit(name.trim(), content.trim(), parentId);
    setContent("");
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!parentId && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2.5 bg-white border border-rule rounded-lg font-sans text-sm text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          required
          maxLength={50}
        />
      )}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        rows={parentId ? 2 : 3}
        className="w-full px-4 py-2.5 bg-white border border-rule rounded-lg font-sans text-sm text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        required
        maxLength={2000}
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting || !name.trim() || !content.trim()}
          className="inline-flex items-center px-5 py-2 bg-primary text-white font-sans text-xs font-semibold uppercase tracking-wider rounded hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Posting\u2026" : parentId ? "Reply" : "Post Comment"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="font-sans text-xs text-muted hover:text-text transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

function CommentCard({
  comment,
  replies,
  onUpvote,
  onReply,
  votedIds,
}: {
  comment: Comment;
  replies: Comment[];
  onUpvote: (id: string) => void;
  onReply: (name: string, content: string, parentId: string | null) => void;
  votedIds: Set<string>;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const hasVoted = votedIds.has(comment.id);
  const savedName = typeof window !== "undefined"
    ? localStorage.getItem("pe-comment-name") || ""
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="flex gap-3">
        {/* Upvote button */}
        <div className="flex flex-col items-center pt-1">
          <button
            onClick={() => onUpvote(comment.id)}
            disabled={hasVoted}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              hasVoted
                ? "text-primary bg-pull-bg"
                : "text-gray-400 hover:text-primary hover:bg-pull-bg"
            }`}
            title={hasVoted ? "Already upvoted" : "Upvote"}
          >
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L13.9282 9.75H0.0717969L7 0Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span
            className={`font-sans text-xs font-semibold ${
              hasVoted ? "text-primary" : "text-muted"
            }`}
          >
            {comment.upvotes}
          </span>
        </div>

        {/* Comment body */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-sans text-xs font-semibold text-text">
              {comment.author_name}
            </span>
            <span className="font-sans text-[11px] text-gray-400">
              {timeAgo(comment.created_at)}
            </span>
          </div>
          <p className="font-serif text-[15px] leading-relaxed text-text whitespace-pre-wrap break-words">
            {comment.content}
          </p>
          {!comment.parent_id && (
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="mt-1.5 font-sans text-[11px] font-semibold text-muted hover:text-primary transition-colors uppercase tracking-wider"
            >
              {showReplyForm ? "Cancel" : "Reply"}
            </button>
          )}

          <AnimatePresence>
            {showReplyForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 overflow-hidden"
              >
                <CommentForm
                  onSubmit={(name, content, pid) => {
                    onReply(savedName || name, content, pid);
                    setShowReplyForm(false);
                  }}
                  parentId={comment.id}
                  placeholder="Write a reply\u2026"
                  onCancel={() => setShowReplyForm(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Replies */}
          {replies.length > 0 && (
            <div className="mt-4 pl-4 border-l-2 border-rule space-y-4">
              {replies.map((reply) => (
                <motion.div
                  key={reply.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="flex flex-col items-center pt-1">
                    <button
                      onClick={() => onUpvote(reply.id)}
                      disabled={votedIds.has(reply.id)}
                      className={`w-6 h-6 flex items-center justify-center rounded transition-colors ${
                        votedIds.has(reply.id)
                          ? "text-primary bg-pull-bg"
                          : "text-gray-400 hover:text-primary hover:bg-pull-bg"
                      }`}
                    >
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 14 10"
                        fill="none"
                      >
                        <path
                          d="M7 0L13.9282 9.75H0.0717969L7 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <span
                      className={`font-sans text-[10px] font-semibold ${
                        votedIds.has(reply.id) ? "text-primary" : "text-muted"
                      }`}
                    >
                      {reply.upvotes}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="font-sans text-[11px] font-semibold text-text">
                        {reply.author_name}
                      </span>
                      <span className="font-sans text-[10px] text-gray-400">
                        {timeAgo(reply.created_at)}
                      </span>
                    </div>
                    <p className="font-serif text-[14px] leading-relaxed text-text whitespace-pre-wrap break-words">
                      {reply.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("hot");
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) { setLoading(false); return; }
    const { data } = await sb
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setComments(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchComments();

    // Load voted IDs from localStorage
    const saved = localStorage.getItem("pe-voted-ids");
    if (saved) {
      try {
        setVotedIds(new Set(JSON.parse(saved)));
      } catch {
        // ignore
      }
    }

    // Real-time subscription
    const sb = getSupabase();
    if (!sb) return;
    const channel = sb
      .channel("comments")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "comments" },
        () => fetchComments()
      )
      .subscribe();

    return () => {
      sb.removeChannel(channel);
    };
  }, [fetchComments]);

  const handlePost = async (
    name: string,
    content: string,
    parentId: string | null
  ) => {
    const sb = getSupabase();
    if (!sb) return;
    const { error } = await sb.from("comments").insert({
      author_name: name,
      content,
      parent_id: parentId,
    });
    if (!error) fetchComments();
  };

  const handleUpvote = async (id: string) => {
    if (votedIds.has(id)) return;
    const sb = getSupabase();
    if (!sb) return;

    const newVoted = new Set(votedIds);
    newVoted.add(id);
    setVotedIds(newVoted);
    localStorage.setItem("pe-voted-ids", JSON.stringify([...newVoted]));

    // Optimistic update
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c))
    );

    await sb.rpc("increment_upvote", { comment_id: id }).catch(() => {
      // Fallback: direct update
      sb
        .from("comments")
        .update({ upvotes: (comments.find((c) => c.id === id)?.upvotes || 0) + 1 })
        .eq("id", id)
        .then();
    });
  };

  // Separate top-level comments and replies
  const topLevel = comments.filter((c) => !c.parent_id);
  const repliesMap = new Map<string, Comment[]>();
  comments
    .filter((c) => c.parent_id)
    .forEach((c) => {
      const existing = repliesMap.get(c.parent_id!) || [];
      existing.push(c);
      repliesMap.set(c.parent_id!, existing);
    });

  // Sort top-level
  const sorted = [...topLevel].sort((a, b) => {
    if (sortMode === "hot") return b.upvotes - a.upvotes;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  // Sort replies by oldest first
  repliesMap.forEach((replies) => {
    replies.sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
  });

  return (
    <motion.section
      id="discussion"
      className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">
        Discussion
      </span>
      <h2 className="font-serif text-3xl md:text-4xl text-text leading-tight mb-3">
        Join the Conversation.
      </h2>
      <p className="font-serif text-[16px] text-muted leading-relaxed mb-10">
        What do you think? Share your perspective, challenge the model, or build
        on the idea.
      </p>

      {/* Comment form */}
      <div className="mb-12 p-6 bg-pull-bg rounded-lg border border-green-200">
        <CommentForm onSubmit={handlePost} />
      </div>

      {/* Sort controls */}
      {topLevel.length > 0 && (
        <div className="flex items-center gap-4 mb-8">
          <span className="font-sans text-[11px] text-muted uppercase tracking-wider">
            Sort by
          </span>
          {(["hot", "newest"] as SortMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setSortMode(mode)}
              className={`font-sans text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded transition-colors ${
                sortMode === mode
                  ? "bg-primary text-white"
                  : "text-muted hover:text-primary"
              }`}
            >
              {mode === "hot" ? "Top" : "Newest"}
            </button>
          ))}
          <span className="font-sans text-[11px] text-muted ml-auto">
            {topLevel.length} comment{topLevel.length !== 1 ? "s" : ""}
          </span>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block w-6 h-6 border-2 border-rule border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Comments list */}
      {!loading && sorted.length === 0 && (
        <p className="text-center font-serif text-muted py-12 italic">
          No comments yet. Be the first to share your thoughts.
        </p>
      )}

      <div className="space-y-6">
        {sorted.map((comment) => (
          <div
            key={comment.id}
            className="pb-6 border-b border-rule last:border-0"
          >
            <CommentCard
              comment={comment}
              replies={repliesMap.get(comment.id) || []}
              onUpvote={handleUpvote}
              onReply={handlePost}
              votedIds={votedIds}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
