import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-9 \\",
				children: /* @__PURE__ */ jsx("div", {
					className: "w-[750px] max-w-[100vw] w-full border-b-40 border-b-[rgb(29,71,82)]",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-row h-full w-full max-w-[100vw]",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: "/carly.jpg",
								alt: "Carly",
								className: "w-1/5 h-full opacity-100"
							}),
							/* @__PURE__ */ jsx("img", {
								src: "/carly.jpg",
								alt: "Carly",
								className: "w-1/5 h-full opacity-100"
							}),
							/* @__PURE__ */ jsx("img", {
								src: "/carly.jpg",
								alt: "Carly",
								className: "w-1/5 h-full opacity-100"
							}),
							/* @__PURE__ */ jsx("img", {
								src: "/carly.jpg",
								alt: "Carly",
								className: "w-1/5 h-full opacity-100"
							}),
							/* @__PURE__ */ jsx("img", {
								src: "/carly.jpg",
								alt: "Carly",
								className: "w-1/5 h-full opacity-100"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute flex flex-col w-full text-shadow-[5px_5px_5px_rgb(29,71,82,1)] text-[rgb(255, 0, 0)] left-1/2 -translate-x-1/2 top-1/11 -translate-y-1/7 text-center font-extrabold ",
								children: [
									/* @__PURE__ */ jsx("h1", {
										className: "text-9xl text-[rgb(255,0,0)] leading-none",
										children: "RAGEBAIT"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("p", {
										className: "text-7xl drop-shadow-[0_.5px_.5px_rgba(29,71,82,0.8)] text-[rgb(255,0,0)] leading-none",
										children: "The Game Of Just Asking Questions"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-3xl drop-shadow-[.8px_.8px_rgba(29,71,82,0.8)] text-[rgb(255,0,0)] leading-none pt-4",
										children: "(by Bad Website Inc.)"
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "h-full w-full",
				children
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row h-full w-full max-w-[100vw] border-t-40 border-t-[rgb(29,71,82)]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: "/carly.jpg",
						alt: "Carly",
						className: "w-1/5 h-full"
					}),
					/* @__PURE__ */ jsx("img", {
						src: "/carly.jpg",
						alt: "Carly",
						className: "w-1/5 h-full"
					}),
					/* @__PURE__ */ jsx("img", {
						src: "/carly.jpg",
						alt: "Carly",
						className: "w-1/5 h-full"
					}),
					/* @__PURE__ */ jsx("img", {
						src: "/carly.jpg",
						alt: "Carly",
						className: "w-1/5 h-full"
					}),
					/* @__PURE__ */ jsx("img", {
						src: "/carly.jpg",
						alt: "Carly",
						className: "w-1/5 h-full"
					})
				]
			}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/components/name.tsx
function Name({ content }) {
	return /* @__PURE__ */ jsx("span", { children: content });
}
//#endregion
//#region app/routes/home/enter.tsx
function Enter({ onSetSlots, round, setRound, name1, name2, setName1, setName2, phase, setPhase, winners, roundThreeIndex, winnerIndex, setWinnerIndex, round3 }) {
	const ref = useRef(null);
	const ref2 = useRef(null);
	useRef(null);
	const index1 = round * 2;
	const index2 = index1 + 1;
	const roundThreeIndex1 = (round - 8) * 2;
	const roundThreeIndex2 = roundThreeIndex1 + 1;
	const lastRoundIndex1 = (round - 12) * 2;
	const lastRoundIndex2 = lastRoundIndex1 + 1;
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("button", {
			className: "bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8" + (round >= 8 ? "hidden" : ""),
			disabled: round >= 8,
			onClick: () => ref.current?.showModal(),
			children: "Start"
		}),
		/* @__PURE__ */ jsxs("dialog", {
			ref,
			className: "fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-lg p-6 backdrop:bg-black/50",
			children: [
				/* @__PURE__ */ jsx("p", { children: "Player 1:" }),
				/* @__PURE__ */ jsx("input", {
					type: "text",
					value: name1,
					onChange: (e) => setName1(e.target.value)
				}),
				/* @__PURE__ */ jsx("p", { children: "Player 2:" }),
				/* @__PURE__ */ jsx("input", {
					type: "text",
					value: name2,
					onChange: (e) => setName2(e.target.value)
				}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => {
						onSetSlots(index1, name1, index2, name2);
						console.log(name1, name2);
						setName1(name1);
						setName2(name2);
						setRound(round + 1);
						ref.current?.close();
					},
					children: "Enter names"
				})
			]
		}),
		/* @__PURE__ */ jsx("button", {
			className: round < 8 ? "hidden" : "",
			disabled: round < 8,
			onClick: () => {
				ref2.current?.showModal();
				setName1(winners[roundThreeIndex1]);
				setName2(winners[roundThreeIndex2]);
				setRound(round + 1);
				setPhase("round");
			},
			children: "Start Round 2"
		}),
		/* @__PURE__ */ jsx("button", {
			className: round < 9 ? "hidden" : "",
			disabled: round < 9,
			onClick: () => {
				setName1(winners[roundThreeIndex1]);
				setName2(winners[roundThreeIndex2]);
				setRound(round + 1);
				setPhase("round");
			},
			children: "Continue"
		}),
		/* @__PURE__ */ jsx("button", {
			className: round < 12 ? "hidden" : "",
			disabled: round < 12,
			onClick: () => {
				if (round === 12) setWinnerIndex(0);
				setName1(winners[lastRoundIndex1]);
				setName2(winners[lastRoundIndex2]);
				setRound(round + 1);
				setPhase("round");
			},
			children: "Round 3!"
		}),
		/* @__PURE__ */ jsx("button", {
			className: round < 14 ? "hidden" : "",
			disabled: round < 14,
			onClick: () => {
				setName1(round3[0]);
				setName2(round3[1]);
				setRound(round + 1);
				setPhase("round");
				console.log(round);
			},
			children: "Last Round!"
		})
	] }) });
}
//#endregion
//#region app/routes/home/game/bracket-ui.tsx
function Bracket({ slots, setSlots, winners, setWinners, onSetWinners, round3, winner, onStartRound, round, setRound, name1, name2, setName1, setName2, phase, setPhase, roundThreeIndex, winnerIndex, lastRound, setWinnerIndex, setLastRound, onSetLastRound, champion, setChampion }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full h-full bg-[url('/carly.jpg')] bg-center pt-4 pb-4 font-bold",
		children: [/* @__PURE__ */ jsx("div", { className: "flex justify-center items-center" }), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-9 gap-4 bracket-wrapper w-full h-full items-center text-center pt-4 pb-4 space-x-8 pl-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-8 h-full space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[0] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pb-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[1] })
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[4] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)]    pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[5] })
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[8] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[9] })
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pb-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[12] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pb-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[13] })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-8 h-full flex flex-col space-y-2",
					children: [
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "square bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pl-4 pr-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[0] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pr-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[2] })
						}),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 pr-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[4] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 pr-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[6] })
						}),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-8 h-full space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "big-rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: round3[0] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "big-rectangle pt-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 items-center justify-center shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: round3[3] })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-9 h-full flex flex-col rounded-md space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "lastRound pt-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 items-center justify-center pl-4 pr-4 shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: lastRound[0] })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-9 text-center rounded-md",
					children: [
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "winner rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] items-center justify-center p-4 shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: champion })
						}),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx(Enter, {
							onSetSlots: (index1, name1, index2, name2) => {
								setSlots((prev) => {
									const next = [...prev];
									next[index1] = name1;
									next[index2] = name2;
									return next;
								});
								setTimeout(() => {
									onStartRound();
								}, 2e3);
							},
							round,
							setRound,
							name1,
							name2,
							setName1,
							setName2,
							phase,
							setPhase,
							roundThreeIndex,
							round3,
							winners,
							winnerIndex,
							setWinnerIndex,
							champion,
							setChampion
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-9 h-full flex flex-col pr-4 rounded-md space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "lastRound pt-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] p-4 shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: lastRound[1] })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-8 h-full rounded-md space-y-2 ",
					children: [
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "big-rectangle rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] p-2 shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: round3[1] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "big-rectangle pt-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: round3[2] })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-8 h-full rounded-md space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[1] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[3] })
						}),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("br", {}) }),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[5] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: winners[7] })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "column grid grid-rows-8 h-full rounded-md space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[2] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[3] })
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[6] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[7] })
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[10] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[11] })
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[14] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]",
							children: /* @__PURE__ */ jsx(Name, { content: slots[15] })
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "column grid grid-rows-8 h-full space-y-2" })
			]
		})]
	});
}
//#endregion
//#region app/carddata.tsx
var subjects = [
	"Kim Kardashian",
	"Elon Musk",
	"Hasan Piker"
];
var issues = ["the environment", "income inequality"];
var events = ["9/11"];
var objects = ["the sun", "AI"];
var places = ["Disneyland", "Times Square"];
//#endregion
//#region app/cardpatterns.tsx
function Cardpatterns() {
	const RandomSubject = subjects[Math.floor(Math.random() * subjects.length)];
	const RandomEvent = events[Math.floor(Math.random() * events.length)];
	const RandomObject = objects[Math.floor(Math.random() * objects.length)];
	const RandomIssue = issues[Math.floor(Math.random() * issues.length)];
	const RandomPlace = places[Math.floor(Math.random() * places.length)];
	const patterns = [
		() => `Is ${RandomSubject} good or bad?`,
		() => `Was ${RandomEvent} good or bad?`,
		() => `Are ${RandomSubject} good or bad?`,
		() => `Is ${RandomSubject} real?`,
		() => `Is ${RandomSubject} good for ${RandomIssue}?`,
		() => `Is it more ethical to kill someone or cause someone to never have been born?`,
		() => `If AI could suffer, would that make current AI usage better or worse?`,
		() => `Would it be better if ${RandomObject} didn't exist?`,
		() => `Would you rather drink human breast milk or eat human meat?`,
		() => `Explain why your opponent is more attractive than you.`,
		() => `Explain why you are more attractive than your opponent.`,
		() => `Would you rather be addicted to meth yourself or deal meth to people who then become addicted?`,
		() => `Would you rather get food poisoning at ${RandomPlace} or ${RandomPlace}?`,
		() => `Would it be better if God didn't exist, or if he did exist and knowingly allowed suffering to happen?`
	];
	const pattern = patterns[Math.floor(Math.random() * patterns.length)];
	const [content] = useState(() => {
		return pattern();
	});
	console.log(content);
	return /* @__PURE__ */ jsx("p", { children: content });
}
//#endregion
//#region app/components/card.tsx
function Card({ content }) {
	return /* @__PURE__ */ jsx("div", {
		className: "card",
		children: /* @__PURE__ */ jsx(Cardpatterns, {})
	});
}
//#endregion
//#region app/routes/home/game/round-ui.tsx
function Round({ setWinners, name1, name2, onBack, onSetWinners, winnerIndex, setWinnerIndex, round, onSetRound3, onSetLastRound, champion, setChampion }) {
	const [playerOne, setPlayerOne] = useState(false);
	const [playerTwo, setPlayerTwo] = useState(false);
	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[url('/carly.jpg') h-full",
		children: [
			/* @__PURE__ */ jsx("div", { children: "Debate topic:" }),
			/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Card, { content: "" }) }),
			/* @__PURE__ */ jsx("button", {
				className: playerOne ? "hidden" : "",
				disabled: playerOne,
				onClick: () => {
					setPlayerOne(true);
					ref.current?.showModal();
					setTimeout(() => {
						ref.current?.close();
					}, 1e3);
				},
				children: "Player One"
			}),
			/* @__PURE__ */ jsx("dialog", {
				ref,
				className: "rounded-lg p-6 backdrop:bg-black/50",
				children: /* @__PURE__ */ jsx("p", { children: "Argue!" })
			}),
			/* @__PURE__ */ jsx("button", {
				className: playerTwo || !playerOne ? "hidden" : "",
				disabled: !playerOne && !playerTwo || playerOne && playerTwo,
				onClick: () => {
					setPlayerTwo(true);
					ref2.current?.showModal();
					setTimeout(() => {
						ref2.current?.close();
					}, 1e3);
				},
				children: "Player Two"
			}),
			/* @__PURE__ */ jsx("dialog", {
				ref: ref2,
				className: "rounded-lg p-6 backdrop:bg-black/50",
				children: /* @__PURE__ */ jsx("p", { children: "Argue!" })
			}),
			/* @__PURE__ */ jsx("button", {
				className: !playerTwo ? "hidden" : "",
				disabled: !playerTwo,
				onClick: () => {
					setPlayerOne(false);
					setPlayerTwo(false);
					ref3.current?.showModal();
				},
				children: "Decide!"
			}),
			/* @__PURE__ */ jsxs("dialog", {
				ref: ref3,
				className: "rounded-lg p-6 backdrop:bg-black/50",
				children: [
					/* @__PURE__ */ jsx("p", { children: "Who do you think won?" }),
					/* @__PURE__ */ jsx("button", {
						onClick: () => {
							if (round <= 8) {
								onSetWinners(winnerIndex, name1);
								setWinnerIndex(winnerIndex + 1);
								onBack();
							}
							if (round > 8) {
								onSetRound3(winnerIndex, name1);
								setWinnerIndex(winnerIndex + 1);
								onBack();
							}
							if (round >= 12) {
								onSetLastRound(winnerIndex, name1);
								setWinnerIndex(winnerIndex + 1);
								onBack();
							}
							if (round >= 14) {
								setChampion(name1);
								onBack();
							}
						},
						children: "Player One"
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => {
							if (round <= 8) {
								onSetWinners(winnerIndex, name2);
								setWinnerIndex(winnerIndex + 1);
								onBack();
							}
							if (round > 8) {
								onSetRound3(winnerIndex, name2);
								setWinnerIndex(winnerIndex + 1);
								onBack();
							}
							if (round >= 12) {
								onSetLastRound(winnerIndex, name2);
								setWinnerIndex(winnerIndex + 1);
								onBack();
							}
							if (round > 14) {
								setChampion(name2);
								onBack();
							}
						},
						children: "Player Two"
					})
				]
			})
		]
	});
}
//#endregion
//#region app/routes/home/game/Game.tsx
var Game_exports = /* @__PURE__ */ __exportAll({ default: () => Game_default });
var empty_slots = Array(16).fill("Name");
var empty_winners = Array(8).fill("Quarterfinals");
var empty_round3 = Array(4).fill("Semifinals");
var empty_lastRound = Array(2).fill("Finals");
var Game_default = UNSAFE_withComponentProps(function Game() {
	const [slots, setSlots] = useState(empty_slots);
	const [winners, setWinners] = useState(empty_winners);
	const [round3, setRound3] = useState(empty_round3);
	const [lastRound, setLastRound] = useState(empty_lastRound);
	const [winner, setWinner] = useState("Winner");
	const [phase, setPhase] = useState("bracket");
	const [round, setRound] = useState(0);
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");
	const [winnerIndex, setWinnerIndex] = useState(0);
	const roundThreeIndex = round - 8;
	const [champion, setChampion] = useState("Champion");
	return phase === "bracket" ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Bracket, {
		slots,
		setSlots,
		winners,
		setWinners,
		onSetWinners: (winnerIndex, winner) => {
			setWinners((prev) => {
				const next = [...prev];
				next[winnerIndex] = winner;
				return next;
			});
		},
		round3,
		winner,
		onStartRound: () => setPhase("round"),
		round,
		setRound,
		name1,
		name2,
		setName1,
		setName2,
		phase,
		setPhase,
		roundThreeIndex,
		winners,
		winnerIndex,
		setWinnerIndex,
		lastRound,
		setLastRound,
		champion,
		setChampion,
		onSetLastRound: (winnerIndex, winner) => {
			setLastRound((prev) => {
				const next = [...prev];
				next[winnerIndex] = winner;
				return next;
			});
		}
	}) }) : /* @__PURE__ */ jsx(Round, {
		setWinners,
		name1,
		name2,
		round,
		setRound,
		onBack: () => setPhase("bracket"),
		winnerIndex,
		setWinnerIndex,
		round,
		lastRound,
		setLastRound,
		champion,
		setChampion,
		round3,
		onSetLastRound: (winnerIndex, winner) => {
			setLastRound((prev) => {
				const next = [...prev];
				next[winnerIndex] = winner;
				return next;
			});
		},
		onSetRound3: (winnerIndex, winner) => {
			setRound3((prev) => {
				const next = [...prev];
				next[winnerIndex] = winner;
				return next;
			});
		},
		onSetWinners: (winnerIndex, winner) => {
			setWinners((prev) => {
				const next = [...prev];
				next[winnerIndex] = winner;
				return next;
			});
		}
	});
});
//#endregion
//#region app/routes/home/game/bracket.tsx
var bracket_exports = /* @__PURE__ */ __exportAll({ default: () => bracket_default });
var bracket_default = UNSAFE_withComponentProps(function BracketPage() {
	return /* @__PURE__ */ jsx(Game_default, {});
});
//#endregion
//#region app/routes/home/game/round.tsx
var round_exports = /* @__PURE__ */ __exportAll({ default: () => round_default });
var round_default = UNSAFE_withComponentProps(function RoundPage() {
	return /* @__PURE__ */ jsx(Game_default, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-PR2gZWlK.js",
		"imports": ["/assets/jsx-runtime-BZrYqnv7.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-09JzbSXL.js",
			"imports": ["/assets/jsx-runtime-BZrYqnv7.js"],
			"css": ["/assets/root-CeWJy97X.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home/game/Game": {
			"id": "routes/home/game/Game",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Game-jDkeGDCd.js",
			"imports": ["/assets/Game-DSoaD0Ph.js", "/assets/jsx-runtime-BZrYqnv7.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home/game/bracket": {
			"id": "routes/home/game/bracket",
			"parentId": "root",
			"path": "bracket",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/bracket-EwQuVYum.js",
			"imports": ["/assets/jsx-runtime-BZrYqnv7.js", "/assets/Game-DSoaD0Ph.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home/game/round": {
			"id": "routes/home/game/round",
			"parentId": "root",
			"path": "round",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/round-ElRJ0wFU.js",
			"imports": ["/assets/jsx-runtime-BZrYqnv7.js", "/assets/Game-DSoaD0Ph.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-7b42ab05.js",
	"version": "7b42ab05",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home/game/Game": {
		id: "routes/home/game/Game",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: Game_exports
	},
	"routes/home/game/bracket": {
		id: "routes/home/game/bracket",
		parentId: "root",
		path: "bracket",
		index: void 0,
		caseSensitive: void 0,
		module: bracket_exports
	},
	"routes/home/game/round": {
		id: "routes/home/game/round",
		parentId: "root",
		path: "round",
		index: void 0,
		caseSensitive: void 0,
		module: round_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
