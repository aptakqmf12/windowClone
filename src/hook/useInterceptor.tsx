import { useEffect } from "react";
import { api } from "@api/index";
import { useWindowStore } from "@store/window";
import { ResponseCode } from "@type/index";
import { requestAccessToken } from "@api/sign";

const useInterceptor = () => {
  const { openAlert } = useWindowStore();

  const reqeustInterceptor = api.interceptors.request.use(
    (request) => {
      const parsedURL = request.url;

      if (parsedURL?.includes("getAccessToken")) {
        request.headers.Authorization = `Bearer ${localStorage.getItem(
          "refresh_token"
        )}`;
        return request;
      } else {
        if (parsedURL?.startsWith("/api/auth")) {
          return request;
        }

        request.headers.Authorization = `Bearer ${localStorage.getItem(
          "access_token"
        )}`;
        request.headers.PackageGroupId = localStorage.getItem("packageGroupId");
        request.headers.PackageId = localStorage.getItem("packageId");
        request.headers.uuid = localStorage.getItem("uuid");
        return request;
      }
    },
    (error) => {}
  );
  const responseInterceptor = api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const { response, config } = err;

      if (response.data.message === ResponseCode.TOKEN_EXPIRED) {
        const res = await requestAccessToken();

        return res.success === true
          ? await api.request(config)
          : Promise.reject(err);
      } else if (
        response.data.message === ResponseCode.EXPIRED_REFRESH_TOKEN ||
        response.data.message === ResponseCode.INVALID_TOKEN
      ) {
        window.location.href = "/signin";
      } else if (response.data.message === ResponseCode.ACCESS_DENIED) {
        openAlert(response.data.data.uuid, {
          type: "warning",
          content: "권한이 없습니다",
        });
      }
    }
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(reqeustInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [reqeustInterceptor, responseInterceptor]);

  return { reqeustInterceptor, responseInterceptor };
};

export { useInterceptor };
